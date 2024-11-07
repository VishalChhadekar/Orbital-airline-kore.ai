import { chatConfig, chatWindow } from 'kore-web-sdk';
let botOptions = chatConfig.botOptions;

botOptions.JWTUrl = "https://jwt-service-provider.vercel.app/api/users/sts";
botOptions.userIdentity = 'vishal.chhadekar@aionos.ai';// Provide users email id here
botOptions.botInfo = { name: "Traveller", "_id": "st-a40177b9-4d18-5506-af61-9af8a3e48028" }; // bot name is case sensitive
botOptions.clientId = "cs-c23b729c-20ff-51da-a8d4-43e4556b2fe4";
botOptions.clientSecret = "7yofPQ5P58rI1gTyUwdTtSLOVPPXDoT0aay7mUsyIB4=";
/*
Important Note: These keys are provided here for quick demos to generate JWT token at client side but not for Production environment.
Refer below document for JWT token generation at server side. Client Id and Client secret should maintained at server end.
https://developer.kore.ai/docs/bots/sdks/user-authorization-and-assertion/
**/
// var chatWindowInstance = new chatWindow(chatConfig);
// chatWindowInstance.show(chatConfig);