// Auto-mapped image imports so dynamic paths from db.json can resolve to module URLs
import beach from '../beach.jpg'
import insta_clone from '../insta clone.jpeg'
import profile_2 from '../profile 2.jpg'
import profile_3 from '../profile 3.jpg'
import profile_4 from '../profile 4.jpeg'
import profile_5 from '../profile 5.jpg'
import profile_6 from '../profile 6.jpeg'
import profile1 from '../profile1.jpg'
import react_img from '../react.jpeg'
import story_1 from '../story 1.jpg'
import story_2 from '../story 2.jpg'
import story_3 from '../story 3.jpg'
import story_4 from '../story 4.jpg'
import story_5 from '../story 5.jpg'
import top10 from '../Top-10-Projects-For-Beginners-To-Practice-HTML-and-CSS-Skills.jpg'

const imagesMap = {
  // keys match the strings used in src/db/db.json
  'src/beach.jpg': beach,
  'src/insta clone.jpeg': insta_clone,
  'src/profile 2.jpg': profile_2,
  'src/profile 3.jpg': profile_3,
  'src/profile 4.jpeg': profile_4,
  'src/profile 5.jpg': profile_5,
  'src/profile 6.jpeg': profile_6,
  'src/profile1.jpg': profile1,
  'src/react.jpeg': react_img,
  'src/story 1.jpg': story_1,
  'src/story 2.jpg': story_2,
  'src/story 3.jpg': story_3,
  'src/story 4.jpg': story_4,
  'src/story 5.jpg': story_5,
  'src/Top-10-Projects-For-Beginners-To-Practice-HTML-and-CSS-Skills.jpg': top10,

  // also expose keys without the "src/" prefix in case some code uses that
  'beach.jpg': beach,
  'insta clone.jpeg': insta_clone,
  'profile 2.jpg': profile_2,
  'profile 3.jpg': profile_3,
  'profile 4.jpeg': profile_4,
  'profile 5.jpg': profile_5,
  'profile 6.jpeg': profile_6,
  'profile1.jpg': profile1,
  'react.jpeg': react_img,
  'story 1.jpg': story_1,
  'story 2.jpg': story_2,
  'story 3.jpg': story_3,
  'story 4.jpg': story_4,
  'story 5.jpg': story_5,
  'Top-10-Projects-For-Beginners-To-Practice-HTML-and-CSS-Skills.jpg': top10,
}

export default imagesMap
