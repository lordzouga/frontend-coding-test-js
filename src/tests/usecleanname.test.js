import { expect, test } from 'vitest';
import { useCleanName } from '../composables/usecleanname';

test('useCleanName', () => {
    const dirty = "dirty-name";
    const cleaned = useCleanName(dirty);

    expect(cleaned).toBe("Dirty Name");
})