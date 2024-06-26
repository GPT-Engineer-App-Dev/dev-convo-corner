import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, VStack, Heading } from '@chakra-ui/react';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    // Here you would typically make an API call to log in the user
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg">
      <Heading as="h2" size="xl" textAlign="center" mb={6}>Login</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" placeholder="Email" {...register('email', { required: 'Email is required' })} />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password" type="password" placeholder="Password" {...register('password', { required: 'Password is required' })} />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
          <Button colorScheme="teal" type="submit" width="full">Login</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Login;