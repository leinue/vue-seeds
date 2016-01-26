<template>
    
    <div style="">

        <div class="row a-bounceinT" style="text-align:center;padding:100px;">
            <p>welcome to vue seeds</p>
        </div>
    </div>

</template>

<script>

    import util from '../commons/scripts/commons.js';
    import us from '../services/UserService.js';

    export default {
        data() {
            return {
            }
        },

        components: {

        },

        methods: {

        },

        created() {
            var _this = this;

            var servicesInterval = setInterval(function() {
                if(typeof window.services != 'undefined') {

                    clearInterval(servicesInterval);

                }
            }, 1);

        }
    };

</script>

<style>
    .nav {
        margin: 10px;
    }

    .nav li {
        display: inline-block;
        font-size: 25px;
    }

    .profile-img {
        width: 100%;
        height: 75px;
        background-image: url(http://img.t.sinajs.cn/t5/skin/public/profile_cover/015_s.jpg?version=f26b055ccf71bd78);
    }

    .profile-photo {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-image: url(http://tp2.sinaimg.cn/2354504421/180/40057719478/0);
        background-size: 60px;
        cursor: pointer;
        margin: 0 auto;
        margin-top: -30px;
    }

    p {
        font-size: 1.4em!important;
        margin-bottom: 3px;
        line-height: .7;
    }

    .profile-detail {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .profile .outer-column {
        border-right: 1px solid rgb(220, 220, 220);
    }

    .profile .outer-column:last-child {
        border-right: none;
    }

    .profile .column {
        margin-bottom: 5px;
        cursor: pointer;
        text-align: center;
    }

    .profile .column:hover {
        color: rgb(0, 124, 246);
    }

    .profile .column span {
        color: rgb(170, 170, 170);
    }

    .recommend-user {
        /*border-top: 1px solid rgb(220, 220, 220);*/
    }

    .panel-header{
        padding: 2px 15px;
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        border-left: 2px solid rgb(0, 124, 246);
    }

    .panel-footer {
        font-size: 14px;
    }

    .panel-section {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .media-body {
        text-align: left;
        padding-left: 10px;
    }

    .photo-group {
        display: table;
        margin: 0 auto;
    }

    .photo-group ul {
        list-style: none;
        margin-left: -40px;
        display: table-row;
    }

    .photo-group ul li {
        float: left;
        cursor: pointer;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        background-image: url(http://i0.hdslb.com/320_200/video/f2/f2b119b4270f1a7c5bf03716065d35be.jpg);
        transition: all .3s ease;
        background-position: center;
        margin: 10px;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .photo-group ul li:hover {
        transform: scale(1.04);
    }

    .cg-img {
        width: 100%;
        height: 120px;
        background-repeat: no-repeat;
        border-radius: 4px;
        margin-bottom: 10px;
        cursor: pointer;
        background-position: center;
        background-size: cover;
    }

    .cg-img:hover {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .cg-group .col-md-6:nth-child(odd) {
        padding-right: 6px;
    }

    .cg-group .col-md-6:nth-child(even) {
        padding-left: 6px;
    }

    .cg-img-cover {
        opacity: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        color: rgb(255, 255, 255);
        text-align: left;
        padding-left: 10px;
        font-weight: 200;
        border-radius: 4px;
    }

    .cg-img-cover .span {
        text-align: right;
        width: 100%;
        font-size: 2.4em;
        padding-right: 5px;
    }

    .cg-img-cover p {
        font-size: 1em!important;
    }

    .cg-img-cover h4 {
        font-weight: 200;
    }

    .cg-img-cover.index {
        padding-top: 60px;
    }

    .cg-img-cover.index h4 {
        margin-top: 0px;
    }

    @media screen and (max-width: 960px) {
        .photo-group ul li {
            width: 30px;
            height: 30px;
            background-size: 30px;
        }

        .img-box {
            display: flex;
            /*flex-wrap: wrap;*/
            flex-direction: column;
            flex: none;
        }

        .img-item {
            width: 100%;
        }

        .img-item2 {
            width: 100%;
        }

    }

    @media screen and (max-width: 800px) {
        .cg-container {
            padding-left: 0px;
        }

        #cgc-index {
            margin-top: 10px;
        }

        .cg-img {
            height: 320px;
        }

        .photo-group ul li {
            width: 100px;
            height: 100px;
            background-size: 100px;
        }
    }

    @media screen and (max-width: 414px) {
        .photo-group ul li {
            width: 60px;
            height: 60px;
            background-size: 60px;
        }
    }

    @media screen and (max-width: 1023px) {
        .profile .outer-column {
            border-bottom: 1px solid rgb(220, 220, 220);
            border-right: none;
            padding-top: 5px;
            margin-bottom: 5px;
        }

        .profile .outer-column:last-child {
            border-bottom: none;
        }

        .recommend-user {
            margin-top: 0px;
        }

    }

    .cgrecocover-transition {
        transition: all .3s ease;
        opacity: 1;
    }

    .cgrecocover-enter, .cgrecocover-leave {
        padding: 0 10px;
        opacity: 0;
    }

    .img-box {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
    }

    .img-item {
        flex: 1;
        height: 140px;
        cursor: pointer;
        background-image: url(http://i0.hdslb.com/320_200/video/f2/f2b119b4270f1a7c5bf03716065d35be.jpg);
        /*background-size: 100% 100%;*/
        background-position: center;
    }

    .img-item2 {
        flex: 2;
    }

    .hot-tags-content {
        width: 100%;
    }

    .hot-tags-section {
        width: 100%;
        text-align: center;
        box-shadow: 0 0 1px 1px rgb(220, 220, 220);
    }

    .hot-tags-section h4 {
        font-weight: 200;
        margin-top: 0px!important;
        padding-top: 5px!important;
        margin-bottom: 5px!important;
    }

    .hot-tags-img {
        display: table;
        width: 100%;
    }

    .hot-tags-img ul {
        list-style: none;
        display: table-row;
        margin-left: -40px;
    }

    .hot-tags-img ul li {
        display: table-cell;
        border: 1px solid rgb(255, 255, 255);
        height: 220px;
        background-image: url(http://i2.hdslb.com/u_user/c143946c2acf6e34e836bd9e24871ad7.jpg);
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
    }

    .hot-tags-img ul li:hover {
        transition: all .3s ease;
        padding: 10px;
    }

    .hot-tags-section-padding {
        padding: 7px;
    }

    .hot-cg {
        /*border-left: 1px solid rgb(220, 220, 220);*/
    }

    .col-md-6 {
        padding-left: 0px;
        padding-right: 0px;
    }

    .hot-tags-content .col-md-6 {
        /*padding-left: 10px;*/
        padding-right: 15px;
    }

    .hot-cg-imgs .col-md-4 {
        padding-right: 0px!important;
        /*padding-left: 10px;*/
    }

</style>
