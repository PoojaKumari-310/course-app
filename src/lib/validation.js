export const NumberValidator = (event) => {
   
    let keyCode = event.keyCode ? event.keyCode : event.which;

    if (!(keyCode >= 48 && keyCode <= 57)) {
        
        event.preventDefault();
    }
};

export const emailValidator = (input) => {
    

// This expression will force the first letter to be alphabetic and the remaining characters to be alphanumeric or any of the following special characters: @,#,%,&,*
   // The combination means, email address must start with “_A-Za-z0-9-\+” , optional follow by “.[_A-Za-z0-9-]“, and end with a “@” symbol. The email’s domain name must start with “A-Za-z0-9-”, follow by first level (top level domain) Tld (.com, .net) “.[A-Za-z0-9]” and optional follow by a second level Tld (.com.au, .com.my) “\.[A-Za-z]{2,}”, where second level Tld must start with a dot “.” and length must equal or more than 2 characters.

// ^                       #start of the line
// (                     #   start of group #1
//   .+                  #     any characters (matches Unicode), must contains one or more (+)
// )                     #   end of group   #1
//   @                   #     must contains a "@" symbol
//     (                 #         start of group #2
//       \S+             #           non white space characters, must contains one or more (+)
//     )                 #         end of group #2
//      $                       #end of the line
    // it is a pattern match capital letters , small, numbers, symbols then one @ sure  and then mention again caps , small, nummber then dot then caps , small com then length 2 is min amd 3 is max
   let pattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/;
// if it is  not matching pattern with the input it is false otherwise it will return true condition match the pattern
    return pattern.test(input)
        ? true
        :  !pattern.test(input)
            ? false
            : true;
};

export const passwordValidator = (input) => {
    // This regex will enforce these rules:

// At least one upper case English letter, (?=.*?[A-Z])
// At least one lower case English letter, (?=.*?[a-z])
// At least one digit, (?=.*?[0-9])
// At least one special character, (?=.*?[#?!@$%^&*-])
// Minimum eight in length .{8,} (with the anchors)
    
    return input.match(`(?=.?[A-Z])(?=.[a-z])(?=.?[0-9])` && `(?=.?[#?!@$%^&-])` && `.{8,}`) ? true : false;
};

