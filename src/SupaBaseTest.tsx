import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { supabase } from  './services/supabase';

const SupaBaseTest = () => {

  useEffect(() => {
    const test = async () => {
      const { data, error } = await supabase.auth.getSession()

      if (error) {
        console.log('❌ Supabase error:', error.message)
      } else {
        console.log('✅ Supabase OK')
        console.log('Session:', data.session)
      }
    }

    test()
  }, [])

  return (
    <View>
      <Text>SupaBaseTest</Text>
      <Text>Ramesh</Text>
      <Text>Testing Supabase Connection</Text>
    </View>
  )
}

export default SupaBaseTest
