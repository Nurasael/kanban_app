/**
 * Created by nuraa on 07-04-2016.
 */
import makeFinalStore from 'alt-utils/lib/makeFinalStore';

export default function(alt, storage, storeName) {
    const finalStore = makeFinalStore(alt);
    try {
       alt.bootstrap(storage.get(storeName));
    } catch (e) {
        console.error('Failed to bootstrap data', e);
    }
    finalStore.listen(() => {
       if(!storage.get('debug')) {
           storage.set(storeName, alt.takeSnapshot());
       }
    });
}