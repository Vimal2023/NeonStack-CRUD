import { Button } from "@/components/ui/button";
import UsersTable from "@/components/users-table";
import { UserPlus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UserForm from "@/components/forms/user-form";

export default async function Home() {
  return (
    <div className="flex flex-col gap-4 max-w-7xl mx-auto p-4 md:p-24">
      <h1 className="text-4xl font-bold">Users</h1>

      <div className="flex justify-end text-xl">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="text-xl">
              Add User <UserPlus className="size-5" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-xl">Add User</DialogTitle>
              <DialogDescription className="text-base">
                Add a new user to the database.
              </DialogDescription>

              <UserForm />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <UsersTable />
    </div>
  );
}