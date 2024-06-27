import React from 'react';

const TomVideoGirlBaby = () => {
  return (
    <video controls>
      <source src="path_to_girl_baby_video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

const TomVideoBoyBaby1 = () => {
  return (
    <video controls>
      <source src="path_to_boy_baby_1_video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

const TomVideoBoyBaby2 = () => {
  return (
    <video controls>
      <source src="path_to_boy_baby_2_video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

const TomVideoBoyBaby3 = () => {
  return (
    <video controls>
      <source src="path_to_boy_baby_3_video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export { TomVideoGirlBaby, TomVideoBoyBaby1, TomVideoBoyBaby2, TomVideoBoyBaby3 };
