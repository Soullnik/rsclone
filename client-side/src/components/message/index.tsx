// export const Message = () => {
//   return (
//     <div className="Container">
//             <Container>
//                 <Row>
//                     <Col xs="4">
//                         <div>
//                             <Card className="UsersCard">
//                                 <CardBody>
//                                     <CardSubtitle>
//                                         <Button variant="primary" type="button" onClick={() => { exitChat() }}>
//                                             Exit Chat
//                                         </Button>
//                                     </CardSubtitle>
//                                 </CardBody>
//                             </Card>
//                             {users.map((item, idx) => (
//                                 <Card key={idx} className="UsersCard">
//                                     <CardBody>
//                                         <CardSubtitle>{item.nickname}</CardSubtitle>
//                                     </CardBody>
//                                 </Card>
//                             ))}
//                         </div>
//                     </Col>
//                     <Col xs="8">
//                         <ScrollToBottom className="ChatContent">
//                             {chats.map((item, idx) => (
//                                 <div key={idx} className="MessageBox">
//                                     {item.type ==='join'||item.type === 'exit'?
//                                         <div className="ChatStatus">
//                                             <span className="ChatDate">{item.date}</span>
//                                             <span className="ChatContentCenter">{item.message}</span>
//                                         </div>:
//                                         <div className="ChatMessage">
//                                             <div className={`${item.nickname === nickname? "RightBubble":"LeftBubble"}`}>
//                                             {item.nickname === nickname ? 
//                                                 <span className="MsgName">Me</span>:<span className="MsgName">{item.nickname}</span>
//                                             }
//                                             <span className="MsgDate"> at {item.date}</span>
//                                             <p>{item.message}</p>
//                                             </div>
//                                         </div>
//                                     }
//                                 </div>
//                             ))}
//                         </ScrollToBottom>
//                         <footer className="StickyFooter">
//                             <Form className="MessageForm" onSubmit={submitMessage}>
//                                 <InputGroup>
//                                 <Input type="text" name="message" id="message" placeholder="Enter message here" value={newchat.message} onChange={onChange} />
//                                     <InputGroupAddon addonType="append">
//                                         <Button variant="primary" type="submit">Send</Button>
//                                     </InputGroupAddon>
//                                 </InputGroup>
//                             </Form>
//                         </footer>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
//   )
// }
export {}