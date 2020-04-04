import React from 'react';
import { Card, Image, Embed } from 'semantic-ui-react';

//first do this
// all the information about the video
// props.searchYoutubeResults

// render out the youtube video
// show the image(thumbnail) of the youtube video
// also show the description or the title of the video
// render it as a list

// then do this
// style in a list of Cards

function SearchResultsList(props){

  // create that list of jsx
  const videos = props.searchYoutubeResults.map((video, i) => {
    return (
      <Card key={i}>
        <Card.Content>
          <Embed
            id={video.id.videoId}
            source='youtube'
          />
          <Card.Header>{video.snippet.title}</Card.Header>
          <Card.Description>{video.snippet.description}</Card.Description>
        </Card.Content>
      </Card>
      )
  })

  return (
    <React.Fragment>
      <h1>Playlist</h1>
      <ul>
        {videos}
      </ul>
    </React.Fragment>
    )
}


export default SearchResultsList;
