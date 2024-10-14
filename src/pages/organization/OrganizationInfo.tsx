import { Input } from "src/components/ui/input";
import { Button } from "src/components/ui/button";
import React from "react";
import { getCookieValue, setCookie } from "src/lib/cookies";
import {
  useGetOrganization,
  OrganizationRes,
  useUpdateOrganization,
  OrganizationCreateReq,
} from "../../services/organization";
import { MODAL_TYPES, useModal } from "src/store/use-modal";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "src/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Asterisk } from "lucide-react";

/** 렌더링 지연 이유
 * 1. API 호출 시간
 * 2. ref, useState 관리 통일
 */

const formSchema = z.object({
  organizationName: z
    .string()
    .trim()
    .min(1, { message: "이름은 필수 입력값입니다." }),
  organizationLogo: z.instanceof(File, { message: "로고도 입력해주세요" }),
  organizationCeo: z.string().trim().optional(),
  organizationTelNumber: z
    .string()
    .trim()
    .min(1, { message: "전화번호는 필수 입력값입니다." })
    .regex(/^(?:\d{3}-\d{3}-\d{4}|\d{2}-\d{3}-\d{4})$/, {
      message: "올바른 전화번호 형식이 아닙니다. (ex. 010-123-4567)",
    }),
  organizationAddress: z.any(),
});

const parsingOrganizationInfoToFormValues = (
  organizationInfo?: OrganizationRes
) => {
  if (!organizationInfo) return;

  const { name, logoFileName, ceo, telNumber, address, id, teams } =
    organizationInfo;

  const fakeLogoFile = new File([""], "logo.png", { type: "image/png" });

  return {
    organizationName: name,
    organizationLogo: fakeLogoFile, // TODO : 내려오는 logoFile에 대한 url 필요
    organizationCeo: ceo,
    organizationTelNumber: telNumber || "",
    organizationAddress: address || "",
  };
};

function OrganizationInfo() {
  const { data: organizationInfo } = useGetOrganization(
    getCookieValue("organizationId")
  );
  const { mutateAsync, data, isSuccess } = useUpdateOrganization(
    getCookieValue("organizationId")
  );

  const openModal = useModal((state) => state.openModal);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: parsingOrganizationInfoToFormValues(organizationInfo),
    resetOptions: {
      keepDirtyValues: true,
    },
    defaultValues: {
      organizationName: "",
      organizationCeo: "",
      organizationTelNumber: "",
      organizationAddress: "",
    },
  });
  const fileRef = form.register("organizationLogo");

  const handleOpenAddressModal = () => {
    openModal({
      type: MODAL_TYPES.SEARCH_ADDRESS,
      props: {
        setAddress: (address: string) =>
          form.setValue("organizationAddress", address),
      },
    });
  };

  const updateOrganization = async (formData: z.infer<typeof formSchema>) => {
    const {
      organizationName,
      organizationLogo,
      organizationCeo,
      organizationTelNumber,
      organizationAddress,
    } = formData;

    const companyReq: OrganizationCreateReq = {
      name: organizationName,
      logo: organizationLogo,
      ceo: organizationCeo,
      telNumber: organizationTelNumber,
      address: organizationAddress,
    };

    const result = await mutateAsync(companyReq);
    console.log("결과", result);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(updateOrganization)}
        className="flex flex-col justify-center gap-8 m-10"
      >
        <FormField
          name="organizationName"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap items-center">
                조직명
                <Asterisk size={10} />
              </FormLabel>
              <FormControl>
                <Input placeholder="조직명을 입력해주세요" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="organizationLogo"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap items-center">
                조직 프로필
                <Asterisk size={10} />
              </FormLabel>
              <FormControl>
                <Input type="file" className="cursor-pointer" {...fileRef} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="organizationCeo"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>대표자명</FormLabel>
              <FormControl>
                <Input placeholder="대표자명을 입력해주세요" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="organizationTelNumber"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap items-center">
                대표번호
                <Asterisk size={10} />
              </FormLabel>
              <FormControl>
                <Input placeholder="00-000-0000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="organizationAddress"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>주소</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="button"
                  onClick={handleOpenAddressModal}
                  value={field.value || "주소를 입력해주세요"}
                  className="text-left cursor-pointer"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit">저장</Button>
      </form>
    </Form>
  );
}

export default OrganizationInfo;
