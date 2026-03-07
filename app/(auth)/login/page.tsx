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

const LoginPage = () => {
  return (
    <Card className="w-full h-125 rounded-2xl border-0 p-4 flex flex-col gap-2 justify-between">
      <CardHeader>
        <CardTitle className="font-bold text-3xl">Connexion</CardTitle>
        <CardDescription className="font-bold text-black">
          Saisissez vos identifiants pour vous connecter
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <form className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required   className="h-12 px-3"/>
          </div>
          <div className="grid gap-3">
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input id="password" type="password" required className="h-12 px-3" />
            <a
                href="#"
                className="text-sm underline-offset-4 hover:underline text-red-500 text-right"
              >
                Mot de passe oublié
              </a>
          </div>
          </div>
          <div className="flex justify-center">
            <Button type="submit" className="w-4/5 rounded-full font-bold text-xl bg-red-500 h-12">
              Se connecter
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginPage;
