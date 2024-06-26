import { Container, VStack, Heading, Text, Box, HStack, Button, IconButton } from "@chakra-ui/react";
import { FaCommentDots, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Tech Forum
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Welcome to the Tech Forum! Discuss the latest in technology, share your knowledge, and connect with other tech enthusiasts.
        </Text>
        <HStack justify="space-between">
          <Heading as="h2" size="lg">
            Latest Discussions
          </Heading>
          <Button leftIcon={<FaPlus />} colorScheme="teal" variant="solid">
            New Discussion
          </Button>
        </HStack>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
          <HStack justify="space-between">
            <Text fontSize="xl" fontWeight="bold">
              How to learn React in 2023?
            </Text>
            <IconButton aria-label="Comment" icon={<FaCommentDots />} />
          </HStack>
          <Text mt={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </Text>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
          <HStack justify="space-between">
            <Text fontSize="xl" fontWeight="bold">
              Best practices for Node.js development
            </Text>
            <IconButton aria-label="Comment" icon={<FaCommentDots />} />
          </HStack>
          <Text mt={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;