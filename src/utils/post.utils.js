import { faker } from '@faker-js/faker';

const numericConfig = {
  allowLeadingZeros: false,
  length: {
    min: 1,
    max: 3,
  },
};

export const convertToRelativeTime = (date) => {
  const now = new Date();
  const diff = Math.abs(now - date) / 1000;

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const unit in intervals) {
    if (diff >= intervals[unit]) {
      const value = Math.floor(diff / intervals[unit]);
      return `${value}${unit.charAt(0)}`;
    }
  }

  return 'just now';
};

export const fakePosts = (
  amount = 10,
  username = null,
  profilePicture = null,
) => {
  const posts = [];
  for (let i = 0; i < amount; i += 1) {
    const post = {
      id: faker.string.nanoid(),
      body: faker.lorem.paragraphs({
        min: 1,
        max: 2,
        separator: '\n\n',
      }),
      liked: faker.datatype.boolean(),
      media: faker.datatype.boolean(),
      username: username ?? faker.internet.userName(),
      profilePicture: profilePicture ?? faker.internet.avatar(),
      likes: faker.string.numeric(numericConfig),
      replies: faker.string.numeric(numericConfig),
      createdAt: faker.date.recent({ days: 2 }),
    };
    posts.push(post);
  }
  return posts;
};

export const fakeUser = () => {
  return {
    threads: [],
    fullName: '‎شہریار احمد پیرزادہ',
    username: 'peersahab',
    id: faker.string.nanoid(),
    bio: 'Hello World!',
    profilePicture: 'https://instagram.fisb5-1.fna.fbcdn.net/v/t51.2885-19/334823974_1207974219829092_2711104281774478545_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fisb5-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=cTAUZ4ntqqMAX9Kkq44&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAjwbrUyc-9dNV2S7DmLqo7KMBaoso0iXOIVankEtPIQw&oe=64AF3890&_nc_sid=8b3546',
    followers: 69,
  };
};

export const fakeAvatars = (count) => {
  const avt = [];
  const l = count < 3 ? count : 3;
  for (let i = 0; i < l; i += 1) {
    const avatar = faker.internet.avatar();
    avt.push(avatar);
  }
  return avt;
};

export const fakeMedia = () => {
  const random = Math.floor(Math.random() * 2) + 1;
  if (random === 1) {
    return faker.image.urlLoremFlickr({
      height: 200,
      category: 'nature',
    });
  }
  return faker.image.urlPicsumPhotos({
    height: 200,
  });
};
