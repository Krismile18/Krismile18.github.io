// // 等待文档加载完成后执行
// $(document).ready(function () {
//     // 表单提交事件监听
//     $('#registerForm').on('submit', function (event) {
//         // 阻止表单的默认提交行为
//         event.preventDefault();
        
//         // 获取用户输入的值
//         var username = $('#username').val().trim();
//         var email = $('#email').val().trim();
//         var password = $('#password').val().trim();
//         var confirmPassword = $('#confirmPassword').val().trim();
//         var message = '';

//         // 验证用户输入
//         if (username === '' || email === '' || password === '' || confirmPassword === '') {
//             // 检查是否有空字段
//             message = '所有字段都是必填的。';
//         } else if (password !== confirmPassword) {
//             // 检查密码和确认密码是否匹配
//             message = '密码和确认密码不匹配。';
//         } else if (password.length < 6) {
//             // 检查密码长度是否至少为6个字符
//             message = '密码至少需要6个字符。';
//         } else {
//             // 验证成功
//             message = '注册成功！';
//             $('#message').css('color', 'green');
//         }

//         // 显示验证消息
//         // $('#message').text(message).show();
//     });
// });
$(document).ready(function(){
    // 模拟已存在的用户名列表
    var existingUsernames = ["user1", "user2", "user3", "example"];

    $('#username').on('input', function(){
        var username = $(this).val();
        if (username.length > 0) {
            // 模拟AJAX请求
            $.ajax({
                url: 'checkUsername', // 虽然这里不需要实际的URL，但保留是为了模拟AJAX
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ username: username }),
                success: function() {
                    // 检查用户名是否在模拟的列表中
                    var exists = existingUsernames.includes(username);
                    if (exists) {
                        $('#usernameResult').text('用户名已存在');
                        $('#usernameResult').css('color', 'red');
                    } else {
                        $('#usernameResult').text('用户名可用');
                        $('#usernameResult').css('color', 'green');
                    }
                },
                error: function() {
                    $('#usernameResult').text('检查用户名时发生错误');
                    $('#usernameResult').css('color', 'red');
                }
            });
        } else {
            $('#usernameResult').text('');
        }
    });

    $('#registerForm').on('submit', function(event) {
        event.preventDefault();
        // 在此处添加注册表单提交处理逻辑
    });
});
// 219970825邱光雄