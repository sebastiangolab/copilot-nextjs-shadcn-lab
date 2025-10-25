import { Button } from "@app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@app/components/ui/card";
import { Input } from "@app/components/ui/input";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Next.js + Tailwind + shadcn/ui + Biome
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Boilerplate projekt z nowoczesnym stackiem technologicznym gotowy do rozwoju
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Przykładowy formularz</CardTitle>
              <CardDescription>Demonstracja komponentów shadcn/ui z Tailwind CSS</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Wprowadź swoją nazwę..." />
              <Input placeholder="Wprowadź swój email..." type="email" />
              <div className="flex gap-2">
                <Button>Główny przycisk</Button>
                <Button variant="outline">Drugi przycisk</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Funkcje projektu</CardTitle>
              <CardDescription>Co jest skonfigurowane w tym boilerplate</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Next.js 16 z App Router
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Tailwind CSS 4
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  shadcn/ui komponenty
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Biome linter & formatter
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  ESLint
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Card className="inline-block">
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 mb-4">Gotowy do rozpoczęcia pracy!</p>
              <div className="flex gap-3 justify-center">
                <Button size="sm">npm run dev</Button>
                <Button size="sm" variant="outline">
                  npm run build
                </Button>
                <Button size="sm" variant="outline">
                  npm run format
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
