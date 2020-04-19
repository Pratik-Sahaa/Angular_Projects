import { StatusPipe } from './status.pipe';
import { pipe } from 'rxjs';

describe('StatusPipe', () => {
beforeEach(()=>{
  let stat=document.createElement('p');
  stat.setAttribute("id","status");
  stat.setAttribute("target","NotActive");
  document.body.appendChild(stat);
})

  it('create an instance', () => {
    const pipe = new StatusPipe();
    expect(pipe).toBeTruthy();
  });
it('should return Active',()=>{
  const pipe = new StatusPipe();
  expect(pipe.transform(false)).toEqual('Active');
})
it('should return unknown',()=>{
  const pipe = new StatusPipe();
  expect(pipe.transform(null)).toEqual('unknown');
})

});
