import React from 'react';
import { CircularProgress } from 'native-base';
import { Text, View } from 'react-native';

export const Example = () => {
	return <View><Text>nice</Text></View>

	return (
		<CircularProgress
			size={12}
			value={33}
			trackColor="green.100"
			colorScheme="green"
			style={{
				transform: [{ rotate: '77deg' }],
			}}
		/>
	);
};
