"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Factory } from "lucide-react"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    ownerName: "",
    email: "",
    phone: "",
    industryType: "",
    companySize: "",
    location: "",
    currentProducts: "",
    businessGoals: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Registration data:", formData)
    window.location.href = "/dashboard"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Factory className="h-12 w-12 text-purple-600" />
          </div>
          <CardTitle className="text-2xl">Join ProductionCoach AI</CardTitle>
          <CardDescription>Register your production business for AI-powered coaching and insights</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  placeholder="e.g., Nepal Manufacturing Ltd."
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ownerName">Owner/CEO Name</Label>
                <Input
                  id="ownerName"
                  placeholder="Your full name"
                  value={formData.ownerName}
                  onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="+977-98XXXXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="industryType">Industry Type</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, industryType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="fmcg">FMCG</SelectItem>
                    <SelectItem value="textiles">Textiles</SelectItem>
                    <SelectItem value="food-processing">Food Processing</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="automotive">Automotive</SelectItem>
                    <SelectItem value="chemicals">Chemicals</SelectItem>
                    <SelectItem value="pharmaceuticals">Pharmaceuticals</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="companySize">Company Size</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, companySize: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
                    <SelectItem value="small">Small (11-50 employees)</SelectItem>
                    <SelectItem value="medium">Medium (51-200 employees)</SelectItem>
                    <SelectItem value="large">Large (201-1000 employees)</SelectItem>
                    <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, location: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kathmandu">Kathmandu Valley</SelectItem>
                  <SelectItem value="pokhara">Pokhara</SelectItem>
                  <SelectItem value="chitwan">Chitwan</SelectItem>
                  <SelectItem value="biratnagar">Biratnagar</SelectItem>
                  <SelectItem value="butwal">Butwal</SelectItem>
                  <SelectItem value="birgunj">Birgunj</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentProducts">Current Products/Services</Label>
              <Textarea
                id="currentProducts"
                placeholder="Describe your current product portfolio..."
                value={formData.currentProducts}
                onChange={(e) => setFormData({ ...formData, currentProducts: e.target.value })}
                className="min-h-[80px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessGoals">Business Goals</Label>
              <Textarea
                id="businessGoals"
                placeholder="What are your main business objectives? (e.g., expand product line, enter new markets, improve profitability)"
                value={formData.businessGoals}
                onChange={(e) => setFormData({ ...formData, businessGoals: e.target.value })}
                className="min-h-[80px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Start AI Business Coaching
            </Button>
          </form>

          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-purple-600 hover:underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
