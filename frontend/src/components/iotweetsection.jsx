import React from 'react';

class IOTweetSection extends React.Component {

  checkMedia(item)  {
    let media = []
    if (item.entities.media) {
      media = item.entities.media;
    }

    return media.map((_item, _index) => (
        <div key={_index}>
          <img
            src={_item.media_url_https}
            className="img-responsive mx-auto"
            style={{
              width: _item.sizes.small.w,
              height: _item.sizes.small.h,
              maxWidth: '100%',
              objectFit: 'contain'
            }}
            alt="Twitter Media"
          />
        </div>
    ))

  }

  render() {
    return  <React.Fragment>
              {
                this.props.tweets.map((item, index) => (
                  <div key={index}  className="card border-secondary mb-3" style={{maxWidth: '40rem'}}>
                    <div className="card-header">
                      <img src={item.user.profile_image_url_https} className="twitter-avatar" alt="Twitter User Avatar"/>
                      {item.user.name} @{item.user.screen_name}
                    </div>
                    <div className="card-body text-secondary">
                      <div className="card-text">
                        <div className="tweet-text">{item.text}</div>
                        {
                          this.checkMedia(item)
                        }
                      </div>
                    </div>
                  </div>
                ))
              }
            </React.Fragment>
  }
}

export default IOTweetSection;
