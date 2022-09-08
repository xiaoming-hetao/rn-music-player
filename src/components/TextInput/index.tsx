import React from 'react'
import { TextInput, TextInputProps } from 'react-native'

import { styles } from './TextInput.style'

const BaseTextInput = (props: TextInputProps) => {
  return <TextInput {...props} editable maxLength={40} style={styles.input} />
}

export default BaseTextInput
