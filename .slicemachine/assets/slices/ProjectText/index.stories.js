import MyComponent from '../../../../slices/ProjectText';

export default {
  title: 'slices/ProjectText'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading2","text":"Unhappy","spans":[]}],"description":[{"type":"paragraph","text":"Nisi commodo reprehenderit commodo mollit voluptate non.","spans":[]}],"color":"whiteTheme"},"slice_type":"project_text","id":"_Default"}} />
_Default.storyName = ''

export const _WithImage = () => <MyComponent slice={{"variation":"withImage","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading2","text":"Personal","spans":[]}],"description":[{"type":"paragraph","text":"Lorem magna in in proident proident eiusmod enim dolore Lorem anim.","spans":[]}],"color":"blueTheme","image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43"}},"slice_type":"project_text","id":"_WithImage"}} />
_WithImage.storyName = ''
