export default {
    data(){
        return{
            menuItems: [
                {title: "Home", link: "/", icon: "mdi-home"},
                {title: "Characters", link: "/Characters", icon: 'mdi-account'},
                {title: "Episodes", link: "/Episodes", icon: "mdi-folder-multiple-image"},
                {title: "Locations", link: "/Locations", icon: "mdi-image-marker"},
            ]
        }
    },
    methods: {
        switchUrl(url){
            this.$router.push(url);
        }
    }
}