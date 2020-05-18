import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';

import {Post, Header, Avatar, Name, PostImage, Description} from './styles';

const Feed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const loadFeed = async () => {
      const feedHttp = await fetch(
        'http://10.0.2.2:3333/feed?_expand=author&_limit=5&_page=1',
      );
      const feedJson = await feedHttp.json();
      setFeed(feedJson);
    };
    loadFeed();
  }, []);

  return (
    <View>
      <FlatList
        data={feed}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Post>
            <Header>
              <Avatar source={{uri: item.author.avatar}} />
              <Name>{item.author.name}</Name>
            </Header>

            <PostImage source={{uri: item.image}} />
            <Description>
              <Name>{item.author.name}</Name> {item.description}
            </Description>
          </Post>
        )}
      />
    </View>
  );
};

export default Feed;
