import { Field as ChakraField } from '@chakra-ui/react'
import * as React from 'react'

export const Field = React.forwardRef(function Field(props, ref) {
  const sanitizeProps = (inputProps) => {
    // List of props yang perlu difilter
    const serverSideProps = [
      'fdprocessedid',
      'fd-form-id',
      // tambahkan prop server-side lain jika ada
    ]
    
    return Object.entries(inputProps).reduce((acc, [key, value]) => {
      // Filter props yang dimulai dengan 'fd' dan props yang ada di serverSideProps
      if (!key.startsWith('fd') && !serverSideProps.includes(key)) {
        acc[key] = value
      }
      return acc
    }, {})
  }
  const { label, children, helperText, errorText, optionalText, ...rest } =props
  const sanitizedRootProps = sanitizeProps(rest)
  return (
    <ChakraField.Root ref={ref} {...sanitizedRootProps}>
      {label && (
        <ChakraField.Label>
          {label}
          <ChakraField.RequiredIndicator fallback={optionalText} />
        </ChakraField.Label>
      )}
      {React.Children.map(children, (child) => {
        if(React.isValidElement(child)){
          const childProps = sanitizeProps(child.props)
          return React.cloneElement(child, childProps)
        }
        return child
      })}
      {helperText && (
        <ChakraField.HelperText>{helperText}</ChakraField.HelperText>
      )}
      {errorText && <ChakraField.ErrorText>{errorText}</ChakraField.ErrorText>}
    </ChakraField.Root>
  )
})
