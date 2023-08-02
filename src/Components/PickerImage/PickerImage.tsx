import React from 'react';
import {Image, ImageProps, StyleSheet, TouchableOpacity} from 'react-native';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import IconUploadImage from "@/Assets/Icons/IconUploadImage";

interface AvatarProps extends ImageProps {
  onChange?: (image: ImageOrVideo) => void;
}

export const Avatar = (props: AvatarProps) => {
  const [uri, setUri] = React.useState(props.source?.uri || undefined);

  const pickPicture = () => {
    ImagePicker.openPicker({
      width: 148,
      height: 168,
      borderRadius: 26,
      cropping: true,
    }).then(image => {
      setUri(image.path);
      props.onChange?.(image);
    });
  };
  return (
    <TouchableOpacity onPress={pickPicture}>
      <Image
          style={styles.avatar}
          {...props}
          source={uri ? {uri} : props.source}
      />

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 87,
    width: 87,
    borderRadius: 100,
  },
});
