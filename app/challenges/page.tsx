'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Trophy } from 'lucide-react'

export default function ChallengesPage() {
  const challenges = [
    { id: 1, name: '52-Week Savings Challenge', desc: 'Save progressively each week', members: '1.2k', difficulty: 'Easy' },
    { id: 2, name: 'No-Spend Month', desc: 'Spend only on essentials for 30 days', members: '856', difficulty: 'Hard' },
    { id: 3, name: 'Round-Up Savings', desc: 'Round up every purchase to the nearest dollar', members: '2.1k', difficulty: 'Easy' },
    { id: 4, name: 'Debt Payoff Sprint', desc: 'Accelerate your debt payoff journey', members: '643', difficulty: 'Hard' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="mb-12">
          <h1 className="text-5xl font-serif font-bold text-foreground mb-4 flex items-center gap-3">
            <Trophy className="text-primary" />
            Savings Challenges
          </h1>
          <p className="text-xl text-foreground/60">
            Join our community challenges and reach your financial goals together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{challenge.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/60">{challenge.desc}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-foreground/60">{challenge.members} Participants</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${challenge.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {challenge.difficulty}
                    </span>
                  </div>
                  <Link href="/community/chat">
                    <Button className="bg-primary hover:bg-primary/90">Join</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
