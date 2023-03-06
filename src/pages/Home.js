import PropTypes from 'prop-types';
import Comment from '../components/Comment';

import styles from '../styles/home.module.css';

const Home = ({ posts }) => {

    return (
        <div className={styles.postsList}>
            {posts.map((post) => (
                <div className={styles.postWrapper} key={`post-${post._id}`}>
                    <div className={styles.postHeader}>
                        <div className={styles.postAvatar}>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                alt="user-pic"
                            />
                            <div>
                                <span className={styles.postAuthor}>{post.user.name}</span>
                                <span className={styles.postTime}>a minute ago</span>
                            </div>
                        </div>
                        <div className={styles.postContent}>{post.conent}</div>

                        <div className={styles.postActions}>
                            <div className={styles.postLike}>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
                                    alt="likes-icon"
                                />
                                <span>{post.likes.length}</span>
                            </div>

                            <div className={styles.postCommentsIcon}>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/13/13673.png"
                                    alt="comments-icon"
                                />
                                <span>{post.comments.length}</span>
                            </div>
                        </div>

                        <div className={styles.postCommentBox}>
                            <input placeholder="Start typing a comment" />
                        </div>

                        <div className={styles.postCommentsList}>
                            {post.comments.map((comment) => (
                                <Comment comment={comment} />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

Home.propTypes = {
    posts: PropTypes.array.isRequired,
};

export default Home;