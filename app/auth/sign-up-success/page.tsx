'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

export default function SignUpSuccess() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-gradient-to-br from-pink-50 to-white">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card className="border-pink-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Welcome to Mommy Louise!</CardTitle>
              <CardDescription className="text-green-100">
                Your account has been created successfully
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-gray-700">
                  Check your email to confirm your account. Once confirmed, you can log in and start exploring our collection of beautiful budget templates and resources.
                </p>
                <p className="text-sm text-gray-600">
                  Didn&apos;t receive an email? Check your spam folder or contact our support team.
                </p>
                <Link href="/auth/login" className="block">
                  <Button className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:from-pink-700 hover:to-rose-700">
                    Go to Login
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
