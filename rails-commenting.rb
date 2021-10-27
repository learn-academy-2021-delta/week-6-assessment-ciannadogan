# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The creation of a controller class called BlogPostsController that inherits from the ApplicationController class
class BlogPostsController < ApplicationController
  def index
 # ---2) The declaration of an instance variable called posts that is initialized by calling the active record command .all on the class BlogPost. It stores all the objects into an array.
    @posts = BlogPost.all
  end

  def show
  # ---3) The declaration of an instance variable called posts initialized by calling the active record command .all on the class BlogPost. It will store all the BlogPost objects in an array.
    @post = BlogPost.find(params[:id])
  end

  # ---4) The creation of a controller method named 'new'. Which generates a HTML form.
  def new
    @post = Post.new
  end

  def create
  # ---5) Declaration of instance variable post which is initalized by calling .create on the class BlogPost and passing in a method that will submit the user data to the database.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) The creation of a controller method called 'edit'. Which generates a HTML form that expects input for editing a specific item. 
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Calling .update on an instance variable post and will update the variable based on the user input params.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) Sends the user to a route with an alias
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Private is a key word that prevents the items from being referenced outside of the existing controller class.
  private
  def blog_post_params
  # ---10) Requires that the params have an object that allows params, title, and content. Also prevents other parameters from being altered.
    params.require(:blog_post).permit(:title, :content)
  end
end
