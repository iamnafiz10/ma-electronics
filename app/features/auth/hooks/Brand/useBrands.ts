import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BrandDTO } from "@/app/features/auth/Dto/Brand.dto";
import { brandsService } from "@/app/features/auth/Service/brands.service";

export const useBrands = () => {
  const [brands, setBrands] = useState<BrandDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
  try {
    setLoading(true);
    const res = await brandsService.list();
    console.log(await brandsService.list());
    setBrands(res);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  load();
}, []);

  useEffect(() => {
    load();
  }, []);

  const create = async (name: string, logo: File) => {
    await brandsService.create({ name, logo });
    toast.success("Brand created");
    load();
  };

  const update = async (
    id: string,
    name: string,
    slug: string,
    logo?: File
  ) => {
    await brandsService.update({ id, name, slug, logo });
    toast.success("Brand updated");
    load();
  };

  const remove = async (id: string) => {
    await brandsService.remove(id);
    toast.success("Brand deleted");
    setBrands(prev => prev.filter(b => b.id !== id));
  };

  const toggleStatus = async (id: string) => {
    await brandsService.toggleStatus(id);
    setBrands(prev =>
      prev.map(b =>
        b.id === id ? { ...b, isActive: !b.isActive } : b
      )
    );
  };

  return { brands, loading, create, update, remove, toggleStatus };
};
