import React from 'react'
import styles from '../styles/home.module.css'

function Home(props) {

    const { posts } = props;
    console.log("props", posts)
   posts.map(p=>{
    console.log('content',p.content,' + ','name',p.user.name)
   })
    return (
        <div className={styles.postsList}>
            {posts.map((p) => {
                <div className={styles.postWrapper}>
                    <div className={styles.postHeader}>
                        <div className={styles.postAvatar}>
                            <img
                                src="https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
                                alt="user-pic"
                            />
                            <div>
                                <span className={styles.postAuthor}>{p.user.name}</span>
                                <span className={styles.postTime}>a minute ago</span>
                            </div>
                        </div>
                        <div className={styles.postContent}>{p.conent}</div>

                        <div className={styles.postActions}>
                            <div className={styles.postLike}>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
                                    alt="likes-icon"
                                />
                                <span>5</span>
                            </div>

                            <div className={styles.postCommentsIcon}>
                                <img
                                    src="https://as2.ftcdn.net/v2/jpg/01/09/34/83/1000_F_109348365_Z8PhLswPi5USmZxOyH31cpNVspCHfoD5.jpg"
                                    alt="comments-icon"
                                />
                                <span>2</span>
                            </div>
                        </div>
                        <div className={styles.postCommentBox}>
                            <input placeholder="Start typing a comment" />
                        </div>

                        <div className={styles.postCommentsList}>
                            <div className={styles.postCommentsItem}>
                                <div className={styles.postCommentHeader}>
                                    <span className={styles.postCommentAuthor}>Bill</span>
                                    <span className={styles.postCommentTime}>a minute ago</span>
                                    <span className={styles.postCommentLikes}>22</span>
                                </div>

                                <div className={styles.postCommentContent}>Random comment</div>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Home