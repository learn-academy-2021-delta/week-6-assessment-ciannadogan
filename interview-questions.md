# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: Using migrations is how I would solve this issue.Migrations are able to change the schema of the database overtime. The foreign key for this situation would be cohort_id and should be on the Student model because all students are in cohorts, but not all cohorts have students.

  Researched answer: Because the column was not initially there, we need use a migration. The name of the foreign key should always be named modelname_id. Using migrations is how I would solve this issue because migrations are able to change the schema of the database overtime. The foreign key for this situation would be cohort_id and should be on the Student model because all students are in cohorts, but not all cohorts have students.


2. Which RESTful routes must always be passed params? Why?

  Your answer: The RESTful routes that always need to be passed params are destroy, update, show, and edit so they know which hash is being referenced and amemnded.


  Researched answer: RESTful routes are defined by destroy, update, show, and edit. The ones that always need to be passed params are always destroy, update, show, create, and edit so they know which hash is being referenced and amemnded.


3. Name three rails generator commands. What is created by each?

  Your answer: 
  1) rails g app_name -d postgresql -T -G 
     <!-- Creates an app. The app name should be snake_case.  -->

  2) rails g controller EnterName
     <!-- Creates a controller. -->

  3) rails g migration change_here
     <!-- The first step of the migration process. It creates the time stamped file.-->
  

  Researched answer:
  Your answer: 
  1) rails g app_name -d postgresql -T -G 
     <!-- Creates an app. The app name should be snake_case.  -->

  2) rails g controller EnterName
     <!-- Creates a controller. -->

  3) rails g migration change_here
     <!-- The first step of the migration process. It creates the time stamped file and should start with the specific action and end with the name of the table.-->



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students        

method="POST"   /students    Create  

method="GET"    /students/new  New

method="GET"    /students/2  Index

method="GET"    /students/2/edit   Edit

method="PATCH"  /students/2    Update

method="DELETE" /students/2    Destroy  



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

User Story: As a user, I can see a home page with my to do list of tasks that need to be done.
User Story: As a user, I can click on one task name and a window will pop up showing the title of the task and description.
User Story: As a user, I can edit the title or description field by clicking the pencil icon.
User Story: As a user, I can click submit to make my changes. 
User Story: As a user, when I click on the submit button, the input forms, submit button, and cancel button should no longer be visible.
User Story: As a user, I can return to the home page and see my task with updated title and description.
User Story: As a user, when I click on the 'cancel' button, the input forms, submit button, and cancel button should no longer be visible.
User Story: As a user, I can return to the home page and see my task is not changed.
User Story: As a user, I can close the task information pop up by clicking a close button.
User Story: As a user, I can see an empty check box next to each task that hasn't been completed.