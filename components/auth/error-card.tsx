import { CardWrapper } from "@/components/auth/card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export default function ErrorCard() {
  return (
    <CardWrapper
      headerLabel="Something went wrong!!!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to Login Page"
    >
   
      <ExclamationTriangleIcon className="text-destructive mx-auto w-[50%] h-[50%] bg-white rounded-lg p-4" />

    </CardWrapper>
  )
}
