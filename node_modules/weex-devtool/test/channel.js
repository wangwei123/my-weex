/**
 * Created by godsong on 16/11/6.
 */
import Channel from '../src/core/Channel';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.should();
chai.use(sinonChai);
describe('Channel Test',function(){
    let socketA={send:function(msg){
        console.log('socketA send:',msg);
    }};
    let socketB={send:function(msg){
        console.log('socketB send:',msg);
    }};
    let socketC={send:function(msg){
        console.log('socketC send:',msg);
    }};
    let mockSocketA,mockSocketB,mockSocketC;
    let msg='how old are you?';
    let replay='i\'m fine and you?';
    beforeEach(function(){
        mockSocketA = sinon.mock(socketA);
        mockSocketB = sinon.mock(socketB);
        mockSocketC = sinon.mock(socketC);
        ///mockSocketA.restore();
    });
    it('message dispatcher',function(){
        let channel=new Channel();
        channel.join(socketA);
        channel.join(socketB);
        channel.has(socketA).should.be.equal(true);
        channel.has(socketB).should.be.equal(true);
        channel.has(socketC).should.be.equal(false);
        channel.join(socketC);

        channel.has(socketC).should.be.equal(false);
        mockSocketA.expects('send').once().withArgs(replay);
        mockSocketB.expects('send').once().withArgs(msg);
        channel.send(socketA,msg);
        channel.send(socketB,replay).should.be.equal(1);
        channel.send(socketC,msg).should.be.equal(0);
        mockSocketA.verify();
        mockSocketB.verify();

    });
    it('message cache&leave',function(){
        mockSocketA.expects('send').once().withArgs(replay)
        mockSocketB.expects('send').once().withArgs(msg);
        let channel=new Channel();
        channel.join(socketA);
        channel.join(socketB);
        channel.send(socketA,msg);
        mockSocketB.verify();
        channel.has(socketA).should.be.equal(true);
        channel.leave(socketA);
        channel.has(socketA).should.be.equal(false);
        channel.leave(socketC);
        channel.send(socketB,'not cached',true);
        channel.send(socketB,msg);
        channel.clearCache(socketB);
        channel.send(socketB,msg);
        channel.clearCache();
        channel.send(socketB,replay);
        channel.join(socketA);
        mockSocketA.verify();
    });
    it('test typical socket',function(){
        let channel=new Channel();
        mockSocketB.expects('send').once().withExactArgs('1')
        mockSocketA.expects('send').once().withExactArgs('2');
        mockSocketC.expects('send').once().withExactArgs('3');
        channel.join(socketA,Channel.MASTER);
        channel.join(socketB,Channel.SLAVER);
        channel.send(socketA,'1');
        channel.sendByType(Channel.SLAVER,'2');
        mockSocketB.verify();
        channel.join(socketC,Channel.MASTER);
        channel.has(socketC).should.be.equal(true);
        channel.has(socketA).should.be.equal(false);
        channel.send(socketB,'3');
        channel.join(socketB,Channel.MASTER);
        channel.join(socketA,Channel.MASTER);
        mockSocketB = sinon.mock(socketB);
        mockSocketB.expects('send').once().withExactArgs('4');
        channel.sendByType(Channel.MASTER,'4');
        mockSocketA.verify();
        mockSocketB.verify();
        mockSocketC.verify();
    })
    it('test others',function(){
        let channel=new Channel();
        channel.join(socketA,Channel.MASTER);
        channel.join(socketB,Channel.SLAVER);
        channel.clear();
        channel.has(socketC).should.be.equal(false);
        channel.has(socketA).should.be.equal(false);
    })
})