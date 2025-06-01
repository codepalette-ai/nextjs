"use client";

import React from "react";
import { PricingTable } from "@clerk/nextjs";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with code generation",
    features: [
      "5 code generations per day",
      "Basic templates",
      "Standard color palettes",
      "Community support",
      "Basic export options",
    ],
    limitations: [
      "No custom templates",
      "No priority support",
      "No advanced features",
      "Limited export formats",
    ],
    popular: false,
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "per month",
    description: "Ideal for developers and small teams",
    features: [
      "Unlimited code generations",
      "Premium templates library",
      "Advanced color palette tools",
      "Priority email support",
      "Multiple export formats",
      "Custom template creation",
      "Code optimization suggestions",
      "Version history",
    ],
    limitations: [
      "No team collaboration",
      "No API access",
      "No white-label options",
    ],
    popular: true,
    buttonText: "Start Pro Trial",
    buttonVariant: "default" as const,
  },
  {
    name: "Enterprise",
    price: "$29.99",
    period: "per month",
    description: "For teams and organizations at scale",
    features: [
      "Everything in Pro",
      "Team collaboration tools",
      "API access",
      "White-label options",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "Advanced analytics",
      "Custom branding",
      "SSO integration",
    ],
    limitations: [],
    popular: false,
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
  },
];

const comparisonFeatures = [
  {
    category: "Code Generation",
    features: [
      {
        name: "Daily generations",
        free: "5",
        pro: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Template library",
        free: "Basic",
        pro: "Premium",
        enterprise: "Premium + Custom",
      },
      { name: "Code optimization", free: "❌", pro: "✅", enterprise: "✅" },
      { name: "Version history", free: "❌", pro: "✅", enterprise: "✅" },
    ],
  },
  {
    category: "Design Tools",
    features: [
      {
        name: "Color palettes",
        free: "Standard",
        pro: "Advanced",
        enterprise: "Advanced + Custom",
      },
      { name: "Custom templates", free: "❌", pro: "✅", enterprise: "✅" },
      { name: "Brand guidelines", free: "❌", pro: "❌", enterprise: "✅" },
    ],
  },
  {
    category: "Collaboration",
    features: [
      { name: "Team workspaces", free: "❌", pro: "❌", enterprise: "✅" },
      { name: "Sharing & comments", free: "❌", pro: "❌", enterprise: "✅" },
      { name: "Role management", free: "❌", pro: "❌", enterprise: "✅" },
    ],
  },
  {
    category: "Support & Integration",
    features: [
      {
        name: "Support level",
        free: "Community",
        pro: "Priority Email",
        enterprise: "Dedicated Manager",
      },
      { name: "API access", free: "❌", pro: "❌", enterprise: "✅" },
      { name: "SSO integration", free: "❌", pro: "❌", enterprise: "✅" },
      { name: "SLA guarantee", free: "❌", pro: "❌", enterprise: "99.9%" },
    ],
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your code generation needs. Upgrade or
            downgrade at any time.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular ? "border-primary shadow-lg scale-105" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, limitationIndex) => (
                    <li
                      key={limitationIndex}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                      <span className="text-sm">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.buttonVariant}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Feature Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border rounded-lg">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-4 text-left font-semibold">
                    Features
                  </th>
                  <th className="border border-border p-4 text-center font-semibold">
                    Free
                  </th>
                  <th className="border border-border p-4 text-center font-semibold">
                    Pro
                  </th>
                  <th className="border border-border p-4 text-center font-semibold">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <tr className="bg-muted/50">
                      <td
                        colSpan={4}
                        className="border border-border p-3 font-semibold text-sm uppercase tracking-wide"
                      >
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature, featureIndex) => (
                      <tr
                        key={`${categoryIndex}-${featureIndex}`}
                        className="hover:bg-muted/30"
                      >
                        <td className="border border-border p-4">
                          {feature.name}
                        </td>
                        <td className="border border-border p-4 text-center">
                          {feature.free}
                        </td>
                        <td className="border border-border p-4 text-center">
                          {feature.pro}
                        </td>
                        <td className="border border-border p-4 text-center">
                          {feature.enterprise}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Clerk Pricing Table */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Subscription Management</h2>
          <p className="text-muted-foreground mb-8">
            Manage your subscription and billing details
          </p>
        </div>
        <div className="flex justify-center">
          <PricingTable />
        </div>
      </div>
    </div>
  );
}
