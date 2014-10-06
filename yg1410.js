Colors = [
    '#e51c23',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#5677fc',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#259b24',
    '#8bc34a',
    '#cddc39',
    '#ffeb3b',
    '#ffc107',
    '#ff9800',
    '#ff5722',
    '#795548',
    '#9e9e9e',
    '#607d8b'
];
Sizes = [6];
Meteor.startup(function() {
    AccountsTemplates.init();
    T9n.language = 'zh-cn';
});

if (Meteor.isClient) {
    Template.user.helpers({
        // check if user is an admin
        isAdminUser: function() {
            return Roles.userIsInRole(Meteor.user(), ['admin']);
        }
    });
    Template.registerHelper('randomColor', function() {
        return Random.choice(Colors);
    });
    Template.registerHelper('time', function(time) {
        return time.toLocaleDateString();
    });
    Template.registerHelper('randomSize', function() {
        return Random.choice(Sizes);
    });
    Blog.config({
        comments: {
            useSideComments: true,
        },
        blogIndexTemplate: '10BlogIndex'
    });
}
if (Meteor.isServer) {
    Blog.config({
        adminRole: 'admin',
        authorRole: 'student'
    });
    Meteor.startup(function() {
        if (!Meteor.roles.findOne({
            name: "admin"
        }))
            Roles.createRole("admin");
    })
}