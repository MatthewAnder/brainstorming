import TextInput from "@/components/textInput";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Heading,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
  title: z.string().min(1, "This is required"),
  url: z.string().min(1, "This is required"),
});

type FormData = z.infer<typeof schema>;

export default function BookForm({ ...props }: ModalProps) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submitForm = async ({ title, url }: FormData) => {
    console.log(title, url);
  };

  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent background={"surface"}>
        <ModalHeader>
          <Heading fontSize={"4xl"}>Add Book</Heading>
        </ModalHeader>
        <ModalCloseButton color={"smoke"} />
        <form onSubmit={handleSubmit(submitForm)}>
          <ModalBody>
            <TextInput
              id="title"
              placeholder="Enter your title"
              error={errors.title}
              {...register("title")}
            >
              Title
            </TextInput>
            <TextInput
              id="url"
              placeholder="www.example.com/book.pdf"
              error={errors.url}
              {...register("url")}
            >
              URL
            </TextInput>
          </ModalBody>

          <ModalFooter>
            <Button
              type="submit"
              isLoading={isSubmitting}
              loadingText="Submitting"
              size={"lg"}
              px={8}
              my={4}
              background={"primary.700"}
              color={"smoke"}
              transition={"0.2s"}
              _hover={{
                filter: "brightness(1.3)",
              }}
            >
              Submit
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
