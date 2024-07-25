import { Box, Text } from "@chakra-ui/react";
import { redirect } from "next/navigation";
import { validateRequest } from "@/lib/auth";

export default async function Home() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }

  return (
    <Box>
      <Text>Hello {user.username}!</Text>
    </Box>
  );
}
