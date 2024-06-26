import { useState } from "react";
import { Container, VStack, Heading, Text, Box, HStack, Button, IconButton, Input, Textarea } from "@chakra-ui/react";
import { FaCommentDots, FaPlus } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([
    { title: "How to learn React in 2023?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." },
    { title: "Best practices for Node.js development", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." }
  ]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [isCreating, setIsCreating] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleCreatePost = () => {
    setPosts([...posts, newPost]);
    setNewPost({ title: "", content: "" });
    setIsCreating(false);
  };

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
          <Button leftIcon={<FaPlus />} colorScheme="teal" variant="solid" onClick={() => setIsCreating(true)}>
            New Discussion
          </Button>
        </HStack>
        {isCreating && (
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
            <VStack spacing={4}>
              <Input
                placeholder="Title"
                name="title"
                value={newPost.title}
                onChange={handleInputChange}
              />
              <Textarea
                placeholder="Content"
                name="content"
                value={newPost.content}
                onChange={handleInputChange}
              />
              <Button colorScheme="teal" onClick={handleCreatePost}>
                Create Post
              </Button>
            </VStack>
          </Box>
        )}
        {posts.map((post, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
            <HStack justify="space-between">
              <Text fontSize="xl" fontWeight="bold">
                {post.title}
              </Text>
              <IconButton aria-label="Comment" icon={<FaCommentDots />} />
            </HStack>
            <Text mt={4}>
              {post.content}
            </Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;