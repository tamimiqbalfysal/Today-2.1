import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            Add Your Personal Favourite
          </CardTitle>
          <CardDescription>
            Add a link to your drawer for quick access.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-6">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Example"
                  className="rounded-xl p-4"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="link">Link</Label>
                <Input
                  id="link"
                  placeholder="https://example.com"
                  className="rounded-xl p-4"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center p-6">
          <Button className="w-full max-w-xs rounded-xl bg-gray-700 p-6 text-white hover:bg-gray-800">
            Add
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
