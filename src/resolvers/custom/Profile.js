import { Address, Phone } from '../../models';

const Profile = {
  address:{
    async resolve(parent, _args, ctx, _info){
      const { db } = ctx;
      try{
        const address = await Address(db).findOne({ account_id: parent.account_id});
        return address;
      } catch(err){
        throw new Error(err.message);
      }
      
    }
  },
  phones: {
    async resolve(parent, _args, ctx, _info){
      const { db } = ctx;
      try{
        const phones = await Phone(db).find({ account_id: parent.account_id});
        return phones;
      } catch(err){
        throw new Error(err.message);
      }
    }
  }
}

export { Profile as default }