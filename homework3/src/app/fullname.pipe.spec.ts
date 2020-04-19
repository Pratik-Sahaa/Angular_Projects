import { FullnamePipe } from './fullname.pipe';

describe('FullnamePipe', () => {

  it('create an instance', () => {
    const pipe = new FullnamePipe();
    expect(pipe).toBeTruthy();
  });

  it('return full name', () => {
    let firstName= "Pratik";
    let lastName ="Saha"
    const pipe = new FullnamePipe();
    expect(pipe.transform(firstName,lastName)).toEqual("Pratik Saha");
  });

  it('should return USER if name is empty',()=>{
    let firstName= "";
    let lastName =""
    const pipe = new FullnamePipe();
    expect(pipe.transform(firstName,lastName)).toEqual("USER");
  })
});
