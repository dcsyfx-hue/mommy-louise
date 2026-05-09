'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, Lock, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

interface DigitalLicense {
  id: string
  product_id: string
  license_key: string
  download_count: number
  max_downloads: number
  expires_at: string | null
  is_active: boolean
  products: {
    name: string
    description: string
  }
  created_at: string
}

export default function DownloadsPage() {
  const [supabase, setSupabase] = useState<any>(null)
  const [licenses, setLicenses] = useState<DigitalLicense[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const sb = createClient()
    setSupabase(sb)
    fetchLicenses(sb)
  }, [])

  const fetchLicenses = async (sb: any) => {
    try {
      if (!sb) return
      const {
        data: { user },
      } = await sb.auth.getUser()

      if (!user) {
        setLoading(false)
        return
      }

      const { data, error } = await supabase
        .from('digital_licenses')
        .select('*, products(name, description)')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      setLicenses(data || [])
    } catch (error) {
      console.error('Failed to fetch licenses:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = async (license: DigitalLicense) => {
    try {
      if (license.max_downloads > 0 && license.download_count >= license.max_downloads) {
        alert('Download limit reached for this product.')
        return
      }

      if (license.expires_at && new Date(license.expires_at) < new Date()) {
        alert('This license has expired.')
        return
      }

      // Update download count
      const { error } = await supabase
        .from('digital_licenses')
        .update({ download_count: license.download_count + 1 })
        .eq('id', license.id)

      if (error) throw error

      // In a real app, this would trigger a download
      // For now, we'll just show a success message
      alert(`Downloading: ${license.products.name}\n\nLicense Key: ${license.license_key}`)
      
      // Refresh licenses
      fetchLicenses()
    } catch (error) {
      console.error('Download error:', error)
      alert('Failed to process download')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your downloads...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Downloads</h1>
          <p className="text-gray-600">Access and download your purchased digital products</p>
        </div>

        {licenses.length === 0 ? (
          <Card className="border-pink-200">
            <CardContent className="p-12 text-center">
              <Lock size={48} className="mx-auto mb-4 text-gray-300" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No downloads yet</h3>
              <p className="text-gray-600 mb-6">Purchase a digital product to start downloading</p>
              <Button asChild className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700">
                <Link href="/shop">Browse Products</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {licenses.map(license => {
              const isExpired = license.expires_at && new Date(license.expires_at) < new Date()
              const isDownloadLimited = license.max_downloads > 0 && license.download_count >= license.max_downloads
              const canDownload = license.is_active && !isExpired && !isDownloadLimited

              return (
                <Card key={license.id} className="border-pink-200 hover:border-pink-300 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-pink-900">{license.products.name}</CardTitle>
                        <CardDescription className="text-gray-600 mt-1">
                          {license.products.description}
                        </CardDescription>
                      </div>
                      {!isExpired && !isDownloadLimited && license.is_active && (
                        <CheckCircle size={24} className="text-green-600 flex-shrink-0" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">License Key</p>
                        <p className="font-mono text-sm text-gray-900 break-all">{license.license_key}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Downloads Used</p>
                        <p className="text-sm text-gray-900">
                          {license.download_count}
                          {license.max_downloads > 0 ? ` / ${license.max_downloads}` : ' / Unlimited'}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Expires</p>
                        <p className="text-sm text-gray-900">
                          {license.expires_at
                            ? new Date(license.expires_at).toLocaleDateString()
                            : 'Never'}
                        </p>
                      </div>
                    </div>

                    {isExpired && (
                      <div className="bg-red-50 border border-red-200 rounded p-3">
                        <p className="text-sm text-red-800">
                          ⚠️ This license has expired on {new Date(license.expires_at!).toLocaleDateString()}
                        </p>
                      </div>
                    )}

                    {isDownloadLimited && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                        <p className="text-sm text-yellow-800">
                          ⚠️ Download limit reached. No more downloads available.
                        </p>
                      </div>
                    )}

                    <Button
                      onClick={() => handleDownload(license)}
                      disabled={!canDownload}
                      className={`w-full ${
                        canDownload
                          ? 'bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700'
                          : 'bg-gray-300 cursor-not-allowed'
                      } text-white flex items-center justify-center gap-2`}
                    >
                      <Download size={18} />
                      {canDownload ? 'Download Now' : 'Download Unavailable'}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
