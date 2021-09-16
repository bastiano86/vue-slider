var app = new Vue (
{
    el:'#app',
    data:{
        immagini: [
                    {
                        source:'https://www.sebastianolamonaca.cloud/img/pp/4/show.png',
                        alt:'waves',
                    },
                    {
                        source:'https://www.sebastianolamonaca.cloud/img/pp/7/show.png',
                        alt:'think',
                    },
                    {
                        source:'https://www.sebastianolamonaca.cloud/img/pp/5/show.png',
                        alt:'shapes',
                    },
                    {
                        source:'https://www.sebastianolamonaca.cloud/img/pp/1/show.png',
                        alt:'geometric',
                    },
                    {
                        source:'https://www.sebastianolamonaca.cloud/img/pp/12/show.png',
                        alt:'flip',
                    },
                    {
                        source:'https://www.sebastianolamonaca.cloud/img/pp/2/show.png',
                        alt:'brump',
                    },
                    
                ],
        imageIndex:0,
    },
    methods:{
        previousImage: function(){
            this.imageIndex--;
            if(this.imageIndex < 0 ) {
               this.imageIndex = this.immagini.length - 1; 
            }
        },
        nextImage: function(){
            this.imageIndex++;
            if(this.imageIndex >= this.immagini.length) (
                this.imageIndex = 0
            );
        }
    }
}
)