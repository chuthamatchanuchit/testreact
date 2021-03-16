import React from 'react';
const Post = ({ list }) => {
    return (
        <div>
            <section class="photo">
                <header class="photo__header">
                    <div class="photo__header-column">
                        <img
                            class="photo__avatar"
                            src={list.user.profile_image.small}
                        />
                    </div>
                    <div class="photo__header-column">
                        <span class="photo__username"><a  href={"/profile/"+list.user.username}>{list.user.username}</a></span>
                    </div>
                </header>
                <div class="photo__file-container">
                    <img
                        class="photo__file"
                        src={list.urls.raw}
                    />
                </div>
                <div class="photo__info">
                    <div class="photo__icon">
                        <span class="photo_icon">
                            <i class="fa fa-heart-o heart fa-lg"></i>
                        </span>
                        <span class="photo__icon">
                            <i class="fa fa-comment-o fa-lg"></i>
                        </span>
                    </div>
                    <span class="photo__likes" >{list.likes}likes</span>
                    <div class="photo__comments">
                        <div class="photo__comment">
                            <span class="photo__comment-author"></span>{list.description}
                </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Post;