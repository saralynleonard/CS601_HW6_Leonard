const app = Vue.createApp({
    data(){
        return {
            image1: './images/golden_retriever_puppy.jpg',

            image2: './images/kitten.jpg',

            imageList: ['./images/golden_retriever_puppy.jpg', './images/golden_retriever_dog.jpg', './images/kitten.jpg', './images/cat.jpg'],

            imageIndex: 0
        };
    },
    methods:{
        changeImageDog(newImage){
            this.image1 = newImage;
        },
        changeImageCat(newImage){
            this.image2 = newImage;
        },
        nextImage() {
            this.imageIndex = (this.imageIndex +1)
        },
        previousImage() {
            this.imageIndex = (this.imageIndex - 1)
        }
    },
    //documentation about computed properties: https://v2.vuejs.org/v2/guide/computed.html#Computed-Properties; it's for Vue 2, but seems to work for me. 
    computed: {
        currentCarouselImage() {
            return this.imageList[this.imageIndex]
        }
    }
})
app.mount('#app')