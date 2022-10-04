import { Center, Spinner } from '@chakra-ui/react'

export const Loading = () => {
  return (
    <Center h="100%" w="100%">
      <Spinner
        thickness="5px"
        speed="0.65s"
        color="#DC4D40"
        emptyColor="rgba(220, 77, 64, 0.4)"
        size="xl"
      />
    </Center>
  )
}
