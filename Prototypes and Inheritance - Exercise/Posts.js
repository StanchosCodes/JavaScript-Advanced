function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);

            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let base = super.toString();

            if (this.comments.length > 0) {
                let resultComments = '';

                for (let cmnt of this.comments) {
                    resultComments += ` * ${cmnt}\n`;
                }

                return `${base}\nRating: ${this.likes - this.dislikes}\nComments:\n${resultComments.trimEnd()}`;
            }
            else {
                return `${base}\nRating: ${this.likes - this.dislikes}`;
            }
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);

            this.views = views;
        }

        view() {
            this.views++;

            return this;
        }

        toString() {
            let base = super.toString();

            return `${base}\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

const classes = solution();

let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
// * Good post
// * Very good post
// * Wow!

let blogPost = new classes.BlogPost('My Title', 'Very Cool Content', 0);

blogPost.view();
blogPost.view();
blogPost.view();
blogPost.view();
blogPost.view();

console.log(blogPost.toString());

// Post: My Title
// Content: Very Cool Content
// Views: 5