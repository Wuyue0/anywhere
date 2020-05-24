<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{title}}</title>
  <style>
     body{
       margin: 30px;
       background: url('/assets/bg.jpg');
       padding: 130px;
     }



     .content{
       display: flex;
       justify-content: space-between;
       align-items: center;
       flex-wrap: wrap;
     }

     .block_content{
       font-size: 20px;
       display: flex;
       width: 25%;
       align-items: center;
     }

     .block_content img{
       width: 20px;
       height: 20px;
     }


     a{
       font-size: 20px;
       text-decoration: none;
       margin-left:10px;
     }
  </style>
</head>
<body>
  <div class="wrap">
    <h3>所在的目录:{{title}}</h3>
    <div class="content">
      {{#each files}}
        <div class="block_content">
          <img src="{{mime.icon}}" alt="">
          <a href="{{../dir}}/{{file}}" title="{{mime.type}}">{{file}}</a>
        </div>
      {{/each}}
    </div>
  </div>
</body>
</html>
