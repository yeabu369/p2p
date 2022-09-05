import { useState, useEffect } from 'react'

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Telegram: any
  }
}

const tele = window.Telegram.WebApp

const assets = [
  {
    name: 'TetherUSD',
    ticker: 'USDT',
  },
  {
    name: 'BinanceUSD',
    ticker: 'BUSD',
  },
]

const PlaceOrderPage = () => {
  const [isBuyOrder, setIsBuyOrder] = useState(true)
  const [asset, setAsset] = useState(assets[0])

  useEffect(() => {
    tele.ready()
  }, [])

  return (
    <Flex direction="column" h="full" color="white">
      <MetaTags title="PlaceOrder" description="PlaceOrder page" />
      <Text fontSize="2xl" fontWeight="semibold" color="white">
        Place Order
      </Text>
      <VStack spacing={6} paddingTop={4}>
        <Stack
          borderWidth={1}
          direction="row"
          borderRadius={'sm'}
          borderColor={'blackAlpha.600'}
          w="full"
        >
          <Button
            variant="solid"
            colorScheme={isBuyOrder && 'blackAlpha'}
            borderRadius="md"
            w="100%"
            onClick={() => {
              setIsBuyOrder(true)
            }}
            _focus={{
              outline: 'none',
            }}
          >
            Buy
          </Button>
          <Button
            variant="solid"
            colorScheme={!isBuyOrder && 'blackAlpha'}
            borderRadius="md"
            w="100%"
            onClick={() => {
              setIsBuyOrder(false)
            }}
            _focus={{
              outline: 'none',
            }}
          >
            Sell
          </Button>
        </Stack>
        <Flex w="full">
          <FormControl>
            <FormLabel>Asset</FormLabel>
            <InputGroup borderRadius={'xs'} outlineColor="none">
              <Input
                type="option"
                borderRadius={'sm'}
                disabled
                value={asset.ticker}
                p={4}
              />
              <InputRightAddon
                bg="none"
                borderColor="inherit"
                outline={'none'}
              />
            </InputGroup>
          </FormControl>
        </Flex>
      </VStack>
    </Flex>
  )
}

export default PlaceOrderPage
