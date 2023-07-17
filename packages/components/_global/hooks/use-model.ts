import { WritableComputedRef, computed } from "vue";

/**
 * 对v-model的操作转换成对计算属性的操作
 * @param get 数据的读取方法
 * @param set 数据写方法
 */
export  function useModel<T>(get: ()=> T, set: (val: T) => void): () => WritableComputedRef<T> {
    const modelMapped:WritableComputedRef<T> = computed({get, set})
    return () => modelMapped
}